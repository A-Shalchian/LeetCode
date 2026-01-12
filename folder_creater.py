import requests
import os
import re
from html import unescape

LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql"

LANGUAGE_CONFIG = {
    "python": {
        "folder": "Python",
        "extension": ".py",
    },
    "javascript": {
        "folder": "JavaScript",
        "extension": ".js",
    },
}

LEETCODE_LANG_MAP = {
    "python": "python3",
    "javascript": "javascript",
}


def fetch_problem_by_number(question_num: int) -> dict | None:
    query = """
    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
        problemsetQuestionList: questionList(
            categorySlug: $categorySlug
            limit: $limit
            skip: $skip
            filters: $filters
        ) {
            questions: data {
                frontendQuestionId: questionFrontendId
                titleSlug
            }
        }
    }
    """

    variables = {
        "categorySlug": "",
        "skip": 0,
        "limit": 3000,
        "filters": {}
    }

    headers = {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com"
    }

    try:
        response = requests.post(
            LEETCODE_GRAPHQL_URL,
            json={"query": query, "variables": variables},
            headers=headers
        )
        response.raise_for_status()
        data = response.json()

        questions = data["data"]["problemsetQuestionList"]["questions"]
        title_slug = None

        for q in questions:
            if q["frontendQuestionId"] == str(question_num):
                title_slug = q["titleSlug"]
                break

        if not title_slug:
            print(f"Could not find problem #{question_num}")
            return None

        return fetch_problem_by_slug(title_slug)

    except requests.RequestException as e:
        print(f"Error fetching problem list: {e}")
        return None


def fetch_problem_by_slug(title_slug: str) -> dict | None:
    query = """
    query getQuestion($titleSlug: String!) {
        question(titleSlug: $titleSlug) {
            questionId
            questionFrontendId
            title
            titleSlug
            difficulty
            content
            exampleTestcases
            codeSnippets {
                lang
                langSlug
                code
            }
            topicTags {
                name
            }
        }
    }
    """

    headers = {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com"
    }

    try:
        response = requests.post(
            LEETCODE_GRAPHQL_URL,
            json={"query": query, "variables": {"titleSlug": title_slug}},
            headers=headers
        )
        response.raise_for_status()
        data = response.json()
        return data["data"]["question"]

    except requests.RequestException as e:
        print(f"Error fetching problem details: {e}")
        return None


def html_to_markdown(html: str) -> str:
    if not html:
        return ""

    text = html
    text = re.sub(r'<strong>(.*?)</strong>', r'**\1**', text)
    text = re.sub(r'<b>(.*?)</b>', r'**\1**', text)
    text = re.sub(r'<em>(.*?)</em>', r'*\1*', text)
    text = re.sub(r'<i>(.*?)</i>', r'*\1*', text)
    text = re.sub(r'<code>(.*?)</code>', r'`\1`', text)
    text = re.sub(r'<pre>(.*?)</pre>', r'```\n\1\n```', text, flags=re.DOTALL)
    text = re.sub(r'<li>(.*?)</li>', r'- \1', text)
    text = re.sub(r'<p>(.*?)</p>', r'\1\n\n', text, flags=re.DOTALL)
    text = re.sub(r'<br\s*/?>', '\n', text)
    text = re.sub(r'<sup>(.*?)</sup>', r'^\1', text)
    text = re.sub(r'<sub>(.*?)</sub>', r'_\1', text)
    text = re.sub(r'<[^>]+>', '', text)
    text = unescape(text)
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = text.strip()

    return text


def create_readme(problem: dict, folder_path: str) -> None:
    title = problem["title"]
    difficulty = problem["difficulty"]
    question_num = problem["questionFrontendId"]
    content = html_to_markdown(problem["content"])
    tags = [tag["name"] for tag in problem.get("topicTags", [])]

    readme_content = f"""# {question_num}. {title}

**Difficulty:** {difficulty}

**Tags:** {', '.join(tags) if tags else 'None'}

**Link:** https://leetcode.com/problems/{problem["titleSlug"]}/

---

## Description

{content}
"""

    readme_path = os.path.join(folder_path, "README.md")
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(readme_content)

    print(f"Created: {readme_path}")


def create_solution_file(problem: dict, folder_path: str, language: str) -> None:
    config = LANGUAGE_CONFIG[language]
    leetcode_lang = LEETCODE_LANG_MAP[language]

    code_snippet = ""
    for snippet in problem.get("codeSnippets", []):
        if snippet["langSlug"] == leetcode_lang:
            code_snippet = snippet["code"]
            break

    if not code_snippet:
        print(f"Warning: No code snippet found for {language}")
        code_snippet = ""

    solution_path = os.path.join(folder_path, f"solution{config['extension']}")
    with open(solution_path, "w", encoding="utf-8") as f:
        f.write(code_snippet)

    print(f"Created: {solution_path}")


def create_problem_folder(question_num: int, language: str, base_path: str) -> bool:
    print(f"\nFetching problem #{question_num} from LeetCode...")
    problem = fetch_problem_by_number(question_num)

    if not problem:
        return False

    title = problem["title"]
    config = LANGUAGE_CONFIG[language]

    folder_name = f"{question_num}- {title}"
    language_folder = os.path.join(base_path, config["folder"])
    folder_path = os.path.join(language_folder, folder_name)

    os.makedirs(folder_path, exist_ok=True)

    print(f"\nProblem: {title}")
    print(f"Difficulty: {problem['difficulty']}")
    print(f"Folder: {folder_path}\n")

    create_readme(problem, folder_path)
    create_solution_file(problem, folder_path, language)

    return True


def main():
    print("=" * 50)
    print("  LeetCode Folder Creator")
    print("=" * 50)

    base_path = os.path.dirname(os.path.abspath(__file__))

    print("\nSelect language:")
    print("1. Python")
    print("2. JavaScript")

    while True:
        choice = input("\nEnter choice (1 or 2): ").strip()
        if choice == "1":
            language = "python"
            break
        elif choice == "2":
            language = "javascript"
            break
        else:
            print("Invalid choice. Please enter 1 or 2.")

    while True:
        try:
            question_num = int(input("\nEnter LeetCode question number: ").strip())
            if question_num < 1:
                print("Please enter a valid question number.")
                continue
            break
        except ValueError:
            print("Please enter a valid number.")

    success = create_problem_folder(question_num, language, base_path)

    if success:
        print("\nFolder created successfully!")
    else:
        print("\nFailed to create folder.")


if __name__ == "__main__":
    main()

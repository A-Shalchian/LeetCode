public class LinearSearch{

    public static void linearSearch(int[] arr, int target){
        for (int i = 0; i < arr.length; i++){
            if (arr[i] == target){
                System.out.println("Element found at index " + i);
                return;
            }
        }
        System.out.println("Element not present in array");

        // Linear search is the simplest search algorithm
        // it checks every element in the array for the target
        // best case time complexity is O(1) (if the target is the first element)
        // worst case time complexity is O(n) (if the target is the last element or not in the array)
        // average time complexity is O(n)
        // space complexity is O(1) (no extra space is used)
        // linear search is not efficient for large arrays
    }

    public static void printArray(int[] arr){
        for (int num : arr){
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static void main(String[] args){
        int[] array = {2, 3, 4, 10, 40};
        System.out.println("Original array:");
        printArray(array);

        int target = 10;
        linearSearch(array, target);
    }


}
import java.util.Arrays;

public class MergeSort {
    // Recursive merge sort method
    public static void mergeSort(int[] arr, int left, int right) {
        // Base case: if the array has one or no elements, it's already sorted.
        if (left >= right) {
            return;
        }

        // Find the midpoint of the current subarray
        int mid = left + (right - left) / 2;

        // Recursively sort the left half
        mergeSort(arr, left, mid);

        // Recursively sort the right half
        mergeSort(arr, mid + 1, right);

        // Merge the two sorted halves
        merge(arr, left, mid, right);
    }

    // Merge two sorted subarrays arr[left...mid] and arr[mid+1...right]
    public static void merge(int[] arr, int left, int mid, int right) {
        // Create temporary arrays to hold the two halves
        int[] leftArray = Arrays.copyOfRange(arr, left, mid + 1);
        int[] rightArray = Arrays.copyOfRange(arr, mid + 1, right + 1);

        int i = 0;   // Index for leftArray
        int j = 0;   // Index for rightArray
        int k = left; // Index for merged array

        // Merge the temporary arrays back into arr[left...right]
        while (i < leftArray.length && j < rightArray.length) {
            if (leftArray[i] <= rightArray[j]) {
                arr[k++] = leftArray[i++];
            } else {
                arr[k++] = rightArray[j++];
            }
        }

        // Copy any remaining elements from leftArray
        while (i < leftArray.length) {
            arr[k++] = leftArray[i++];
        }

        // Copy any remaining elements from rightArray
        while (j < rightArray.length) {
            arr[k++] = rightArray[j++];
        }
    }

    // Main method to test the merge sort
    public static void main(String[] args) {
        int[] array = {9, 2, 3, 1, 2, 2, 5, 1, 31, 2};
        System.out.println("Original array: " + Arrays.toString(array));

        mergeSort(array, 0, array.length - 1);

        System.out.println("Sorted array:   " + Arrays.toString(array));
    }
}

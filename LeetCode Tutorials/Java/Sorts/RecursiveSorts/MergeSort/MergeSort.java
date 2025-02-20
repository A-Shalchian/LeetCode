package MergeSort;
import java.util.Arrays;

public class MergeSort {

    // Recursive merge sort method for ascending order
    public static void mergeSortAsc(int[] arr, int left, int right) {
        if (left >= right) return;
        int mid = left + (right - left) / 2;
        mergeSortAsc(arr, left, mid);
        mergeSortAsc(arr, mid + 1, right);
        mergeAsc(arr, left, mid, right);
    }

    // Recursive merge sort method for descending order
    public static void mergeSortDesc(int[] arr, int left, int right) {
        if (left >= right) return;
        int mid = left + (right - left) / 2;
        mergeSortDesc(arr, left, mid);
        mergeSortDesc(arr, mid + 1, right);
        mergeDesc(arr, left, mid, right);
    }
    
    // Merge two sorted subarrays into ascending order
    public static void mergeAsc(int[] arr, int left, int mid, int right) {
        int[] leftArray = Arrays.copyOfRange(arr, left, mid + 1);
        int[] rightArray = Arrays.copyOfRange(arr, mid + 1, right + 1);
        int i = 0, j = 0, k = left;
        
        while (i < leftArray.length && j < rightArray.length) {
            if (leftArray[i] <= rightArray[j]) {
                arr[k++] = leftArray[i++];
            } else {
                arr[k++] = rightArray[j++];
            }
        }
        
        while (i < leftArray.length) {
            arr[k++] = leftArray[i++];
        }
        
        while (j < rightArray.length) {
            arr[k++] = rightArray[j++];
        }
    }
    
    // Merge two sorted subarrays into descending order
    public static void mergeDesc(int[] arr, int left, int mid, int right) {
        int[] leftArray = Arrays.copyOfRange(arr, left, mid + 1);
        int[] rightArray = Arrays.copyOfRange(arr, mid + 1, right + 1);
        int i = 0, j = 0, k = left;
        
        while (i < leftArray.length && j < rightArray.length) {
            if (leftArray[i] >= rightArray[j]) {
                arr[k++] = leftArray[i++];
            } else {
                arr[k++] = rightArray[j++];
            }
        }
        
        while (i < leftArray.length) {
            arr[k++] = leftArray[i++];
        }
        
        while (j < rightArray.length) {
            arr[k++] = rightArray[j++];
        }
    }
    
    public static void main(String[] args) {
        int[] originalArray = {9, 2, 3, 1, 2, 2, 5, 1, 31, 2};
        System.out.println("Original array: " + Arrays.toString(originalArray));
        
        // Create a copy for ascending sort
        int[] ascArray = Arrays.copyOf(originalArray, originalArray.length);
        mergeSortAsc(ascArray, 0, ascArray.length - 1);
        System.out.println("Ascending sort: " + Arrays.toString(ascArray));
        
        // Create a copy for descending sort
        int[] descArray = Arrays.copyOf(originalArray, originalArray.length);
        mergeSortDesc(descArray, 0, descArray.length - 1);
        System.out.println("Descending sort: " + Arrays.toString(descArray));
    }
}

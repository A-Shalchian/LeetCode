import java.util.Arrays;

public class SelectionSort {

    public static void selectionSortAsc(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int min = i;
            // Find the minimum element in the unsorted part
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[min]) { 
                    min = j;
                }
            }
            // Swap only once after the inner loop finishes
            if (i != min) {
                int temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
    }

    public static void selectionSortDesc(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int min = i;
            // Find the minimum element in the unsorted part
            for (int j = i + 1; j < n; j++) {
                if (arr[j] > arr[min]) { 
                    min = j;
                }
            }
            // Swap only once after the inner loop finishes
            if (i != min) {
                int temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
            }
        }
    }
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        int[] array = {64, 25, 12, 22, 11};
        System.out.println("Original array:");
        printArray(array);
        
        int[] ascArray = Arrays.copyOf(array, array.length);
        selectionSortAsc(ascArray);

        System.out.println("Sorted array ascending:");
        printArray(ascArray);

        int[] descArray = Arrays.copyOf(array, array.length);
        selectionSortDesc(descArray);
        
        System.out.println("Sorted array descending:");
        printArray(descArray);
    }
}

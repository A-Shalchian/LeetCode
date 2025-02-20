import java.util.Arrays;

public class InsertionSort {
    
    public static void insertionSortAsc(int[] arr){
        int n = arr.length;
        for (int i = 1; i < n; i++){
            int temp = arr[i];
            int j = i - 1;
            while(j >=0 && arr[j] > temp){ 
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }
    }

    public static void insertionSortDesc(int[] arr){
        int n = arr.length;
        for (int i = 1; i < n; i++){
            int temp = arr[i];
            int j = i - 1;
            while(j >=0 && arr[j] < temp){ 
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = temp;
        }
    }

    public static void printArray(int[] arr){
        for (int num : arr){
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static void main(String[] args){
        int[] array = {64, 25, 12, 22, 11};
        System.out.println("Original array:");
        printArray(array);

        int[] ascArray = Arrays.copyOf(array, array.length);
        insertionSortAsc(ascArray);

        System.out.println("Sorted array ascending:");
        printArray(ascArray);

        int[] descArray = Arrays.copyOf(array, array.length);
        insertionSortDesc(descArray);


        System.out.println("Sorted array descending:");
        printArray(descArray);
    }
}

public class LinearSearch{

    public static void linearSearch(int[] arr, int target){
        for (int i = 0; i < arr.length; i++){
            if (arr[i] == target){
                System.out.println("Element found at index " + i);
                return;
            }
        }
        System.out.println("Element not present in array");
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
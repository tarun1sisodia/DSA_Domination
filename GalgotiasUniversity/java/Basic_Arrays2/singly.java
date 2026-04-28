class SinglyLinkedList {

    // Node class
    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    Node head = null;

    // Insert at beginning
    public void insertAtBeginning(int data) {
        Node newNode = new Node(data);

        newNode.next = head;
        head = newNode;
    }

    // Insert at end
    public void insertAtEnd(int data) {
        Node newNode = new Node(data);

        if(head == null) {
            head = newNode;
            return;
        }

        Node temp = head;

        while(temp.next != null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    // Delete by value
    public void deleteNode(int key) {
        if(head == null) {
            return;
        }

        if(head.data == key) {
            head = head.next;
            return;
        }

        Node temp = head;

        while(temp.next != null && temp.next.data != key) {
            temp = temp.next;
        }

        if(temp.next == null) {
            System.out.println("Value not found");
            return;
        }

        temp.next = temp.next.next;
    }

    // Display list
    public void display() {
        if(head == null) {
            System.out.println("List is empty");
            return;
        }

        Node temp = head;

        while(temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }

        System.out.println("null");
    }

    // Size of linked list
    public int size() {
        int count = 0;
        Node temp = head;

        while(temp != null) {
            count++;
            temp = temp.next;
        }

        return count;
    }

    // Main method
    public static void main(String[] args) {

        SinglyLinkedList list = new SinglyLinkedList();

        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtEnd(30);

        list.insertAtBeginning(5);

        list.display();

        list.deleteNode(20);

        list.display();

        System.out.println("Size = " + list.size());
    }
}
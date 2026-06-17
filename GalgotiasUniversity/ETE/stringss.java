class Main {
    public static void main(String[] args) {
        String s = "Tarun";
        s = s +"sisodia";
        StringBuffer sb = new StringBuffer("Gargi");
        sb.append("Raghav");
        StringBuilder build = new StringBuilder("The");
        build.append("Code");
        
        System.out.println(s.equals(sb));
        System.out.println(sb);
        System.out.println(build);

        
    }
}   
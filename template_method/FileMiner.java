abstract class FileMiner {
    
    public void mine(String path) {
        String file = this.openFile(path);
        String extractedFile = this.extract(file);
        String parsed = this.parse(extractedFile);
        String analyzed = this.analyze(parsed);
        this.report(analyzed);
    }
    
    abstract protected String openFile(String path);

    abstract protected String extract(String fileContent);

    abstract protected String parse(String rawData);

    protected String analyze(String parsedData) {
        return "Analized data";
    }

    protected void report(String analyzedData) {
        // Report data
    }
}
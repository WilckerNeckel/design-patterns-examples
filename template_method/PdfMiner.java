class PdfMiner extends FileMiner {
    
    @Override
    protected String openFile(String path) {
        return "file";
    }

    @Override
    protected String extract(String fileContent) {
        return "extracted data";
    }

    @Override
    protected String parse(String rawData) {
        return "Parse data";
    }

}
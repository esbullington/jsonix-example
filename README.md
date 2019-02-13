# jsonix examples with XMPP schemas and data

## Installation

Unfortunately, for the jsonix schema compiler, Java 8 is required. It will not run on more modern versions of Java.

[Java download](https://www.oracle.com/technetwork/java/javase/downloads/index.html)

Check to make sure you're running Java 8:
    java -version 
    "java version "1.8.0_201"

Then, install Node dependencies:
    yarn install


## Generate JSON schema:
    java -jar node_modules/jsonix-schema-compiler/lib/jsonix-schema-compiler-full.jar -d mappings -p PO $YOUR_XSD_SCHEMA_FILE_HERE



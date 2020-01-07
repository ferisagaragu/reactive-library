SET exeDir=%CD%
cd C:\.reactive-data
curl https://raw.githubusercontent.com/ferisagaragu/reactive-library/master/command/.reactive-data/command.jar -O command.jar
cls
java -jar command.jar %exeDir%
cd %exeDir%
cls
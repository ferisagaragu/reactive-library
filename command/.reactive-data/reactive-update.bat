SET baseDir=%CD%
cd C:\.reactive-data
curl https://raw.githubusercontent.com/ferisagaragu/reactive-library/master/command/.reactive-data/command.jar -O command.jar
cd %baseDir%
echo Update success
reactive
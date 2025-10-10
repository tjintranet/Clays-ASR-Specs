@echo off
setlocal

"C:\Program Files\EasyDataTransform_1_42_0\EasyDataTransform_1_42_0.exe" "\\192.168.10.169\pipeline3\clays_ASR\data\ASR Create DB.transform" -file "REP5576=\\192.168.10.169\pipeline3\clays_ASR\data\ASR_List.xlsx[STERM]" -file "data1=\\192.168.10.169\pipeline3\clays_ASR\data\data.json" -cli -verbose

rem
exit


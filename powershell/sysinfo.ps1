function getIP{
    (Get-NetIPAddress).IPv4Address | Select-String "192*"
    }
$IP = getIP
$USER = $env:USERNAME
$HOSTNAME = $env:COMPUTERNAME
$VERSION = $HOST.Version.Major
$DATE = Get-Date -Format "dddd MM/dd/yyyy"
$BODY = "This machine's IP is $IP. User is $USER. Hostname is $HOSTNAME. Powershell Version $VERSION. Today's date it $DATE."
Write-Host("This machine's IP is $IP. User is $USER. Hostname is $HOSTNAME. Powershell Version $VERSION. Today's date it $DATE.")
#Send-MailMessage -To "reedws@ucmail.uc.edu" -From "troypowers111@gmail.com" -Subject "IT Windows SysInfo" -Body $BODY -SmtpServer smtp.gmail.com -port 587 -UseSSL -Credential (Get-Credential)
"$BODY" | Out-File -FilePath .\powershell\sysinfo.txt
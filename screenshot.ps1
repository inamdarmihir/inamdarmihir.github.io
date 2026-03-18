Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

Add-Type @"
  using System;
  using System.Runtime.InteropServices;
  public class Win32 {
    [DllImport("user32.dll")] public static extern bool SetForegroundWindow(IntPtr hWnd);
    [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
  }
"@

# Find browser
$proc = Get-Process | Where-Object { $_.MainWindowTitle -match 'localhost|5173|Mihir' } | Select-Object -First 1
if ($proc) {
  [Win32]::ShowWindow($proc.MainWindowHandle, 3)
  [Win32]::SetForegroundWindow($proc.MainWindowHandle)
  Start-Sleep -Milliseconds 2000
}

$screen = [System.Windows.Forms.Screen]::PrimaryScreen.Bounds
$bmp = New-Object System.Drawing.Bitmap $screen.Width, $screen.Height
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.CopyFromScreen($screen.Location, [System.Drawing.Point]::Empty, $screen.Size)
$bmp.Save("C:\Users\mihir\Downloads\Mihir-Portfolio\preview.png")
$graphics.Dispose()
$bmp.Dispose()
Write-Host "Screenshot saved"

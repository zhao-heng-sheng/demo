; Ctrl + shift + C: pdf自动删除换行空格
#IfWinActive ahk_class classFoxitReader
^+c::
; 进行常规复制命令
clipboard := "" ; 清空剪贴板（配合 ClipWait 提高脚本健壮性）
Send ^c ; 发送 Ctrl+C 组合键（#IfWinActive 使此处自动恢复为复制功能）
ClipWait ; 等待剪贴板不为空

; 字符串修正
clipboard := StrReplace(clipboard, " `r`n", " ")
clipboard := StrReplace(clipboard, "-`r`n", "")

FoundPos := RegExMatch(clipboard, "^[a-z|A-Z].*", match)
; MsgBox % FoundPos
If (FoundPos = 0)
; Chinese content
clipboard := StrReplace(clipboard, "`r`n", "")
else
; English content
clipboard := StrReplace(clipboard, "`r`n", " ")
return
#IfWinActive
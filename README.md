##  fontmin-script
### 跑 script 以文字檔從字型檔中萃取出新的字型檔
---

1. 請先確定有安裝 [node.js](https://nodejs.org/en/)

2. 命令提示視窗執行
	```text
	npm install
	```

3. 設定 `fontmin.js` 裡面的 `config`，  
`fontsrc` 與 `textsrc`可為單一檔案或 glob，`fontdest` 為目錄
	```text
	var config = {
		fontsrc: './demo/fonts/*.ttf',
		fontdest:'./demo/dist/fonts',
		textsrc: './demo/src/index.html'
	}
	```

---

當修改了 `textsrc` 裡設定過的檔案以後 (例如 `index.html` 內的文字變更了)  
命令提示視窗執行以下指令，就可以轉換出新的字型檔
```text
node fontmin.js
```
就可以了(應該)

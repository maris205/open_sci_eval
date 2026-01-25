import os
import re
import subprocess

# ================= 配置区域 =================
# 1. 你的原始文件
INPUT_DOCX = 'am-prime-chaos-v1.docx'   # <--- 你的文件名

# 2. 中间过程文件
TEMP_MD = 'temp_raw.md'
CLEANED_MD = 'temp_fixed.md'
MEDIA_FOLDER = './media'

# 3. 最终输出文件
FINAL_DOCX = 'Final_Paper_Fixed_v1.docx'
# ===========================================

def run_command(cmd_list):
    try:
        # 强制使用 utf-8 编码运行
        result = subprocess.run(cmd_list, capture_output=True, text=True, check=True, encoding='utf-8')
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ 命令执行失败: {' '.join(cmd_list)}")
        print(f"错误信息: {e.stderr}")
        return False
    except FileNotFoundError:
        print(f"❌ 找不到命令: {cmd_list[0]}。请确认已安装 Pandoc。")
        return False

def step1_export_to_md():
    print(f"📦 [1/3] 正在拆解 Word 文档: {INPUT_DOCX} ...")
    if not os.path.exists(INPUT_DOCX):
        print(f"❌ 错误: 找不到文件 '{INPUT_DOCX}'")
        return False
    
    cmd = ["pandoc", INPUT_DOCX, "-o", TEMP_MD, f"--extract-media={MEDIA_FOLDER}"]
    return run_command(cmd)

def step2_clean_latex():
    print(f"🧹 [2/3] 正在清洗 LaTeX 语法 ...")
    if not os.path.exists(TEMP_MD):
        return False

    with open(TEMP_MD, 'r', encoding='utf-8') as f:
        content = f.read()

    # --- 核心清洗逻辑 ---
    new_content = content
    
    # 1. 修复双反斜杠 (\\ -> \) 
    new_content = new_content.replace(r'\\', '\\')
    
    # 2. 修复公式定界符 (\$ -> $)
    new_content = new_content.replace(r'\$', '$')
    
    # 3. 修复双美元符号 ($$)
    new_content = new_content.replace(r'\$\$', '$$')

    # 4. 修复上标 (\^ -> ^)
    new_content = new_content.replace(r'\^', '^')

    # 5. 修复下划线 (\_ -> _)
    new_content = new_content.replace(r'\_', '_')
    
    # 6. 修复花括号 (\{ -> {)
    new_content = new_content.replace(r'\{', '{')
    new_content = new_content.replace(r'\}', '}')

    # 7. 修复双引号 (\" -> ")
    new_content = new_content.replace(r'\"', '"')

    # 8. 修复方括号 (\[ -> [)
    new_content = new_content.replace(r'\[', '[')
    new_content = new_content.replace(r'\]', ']')

    # 9. 修复竖线/绝对值 (\| -> |)
    new_content = new_content.replace(r'\|', '|')
    
    # 10. 修复小于号 (\< -> <)
    new_content = new_content.replace(r'\<', '<')
    
    # 11. 修复大于号 (\> -> >)
    new_content = new_content.replace(r'\>', '>')

    # ===============================================
    # 🆕 新增：修复省略号 (\... -> ...)
    #    解决 1.543... 变成 1.543\... 的问题
    # ===============================================
    new_content = new_content.replace(r'\...', '...')
    
    # 13. (可选) 如果它把 \dots 转义成了 \\dots，也修一下
    new_content = new_content.replace(r'\\dots', r'\dots')

    # --------------------

    with open(CLEANED_MD, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

def step3_build_docx():
    print(f"🏗️ [3/3] 正在生成最终 Word 文档 ...")
    cmd = ["pandoc", CLEANED_MD, "-o", FINAL_DOCX]
    return run_command(cmd)

if __name__ == "__main__":
    print("="*40)
    print("      Pandoc 自动修复工具 (V4 完美版)")
    print("="*40)

    if step1_export_to_md():
        if step2_clean_latex():
            if step3_build_docx():
                print("="*40)
                print(f"✅ 大功告成！已生成文件: {FINAL_DOCX}")
                try:
                    os.startfile(FINAL_DOCX)
                except:
                    pass
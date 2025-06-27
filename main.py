from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def HomePage():
    data = {
        "pages": ["About", "Works", "Projects", "Publications", "Contact"],
    }

    return render_template("index.html", **data)


@app.route("/admin")
def AdminPage():
    data = {
        "pages": ["About", "Works", "Projects", "Publications", "Contact"],
    }

    return render_template("admin_page.html", **data)

📌 Frappe Development App

This repository contains my Frappe Framework custom application that I built as part of learning and practical work in Frappe development.
It includes a custom DocType implementation completed following the official Frappe tutorial.

🚀 About This Project

I’ve developed this app to learn how to build apps and DocTypes in the Frappe framework, including:

✔️ Setting up the Frappe bench environment
✔️ Creating a custom Frappe application
✔️ Building at least one custom DocType
✔️ Adding fields and configuring the DocType structure
✔️ Understanding how DocTypes define data models in Frappe

This project is based on the Frappe official tutorial for creating a DocType.

🧱 What is Frappe?

Frappe is a full-stack web application framework built with Python and JavaScript. It uses DocTypes as the core building blocks — a DocType represents your data model, database structure, and UI form definition.

📋 Features

✔️ Custom DocType creation
✔️ Frappe app setup
✔️ Bench configuration and developer setup
✔️ Basic fields and metadata definitions
✔️ Ready to install in a Frappe/ERPNext site

📦 Installation Instructions

To use this app in your Frappe development environment:

1. Clone this repository
git clone https://github.com/aadigandharw/aadigandharw-1525462c.git

2. Go to your bench directory

Navigate to your frappe-bench folder:

cd path/to/frappe-bench

3. Install the custom app
bench --site your-site-name install-app aadigandharw-1525462c

4. Restart bench
bench restart


After this, you should see your module and custom DocType available in the Frappe desk.

📄 How I Built This App

I followed the official Frappe documentation steps:

Enabled developer mode in bench.

Created a new Frappe app using bench new-app.

Generated a custom DocType via Frappe Desk UI.

Defined fields and metadata for the DocType structure.

Installed the app on a Frappe site.

Verified that my new DocType works with forms and list views.

🧠 What I Learned

✔️ How to create and structure a Frappe app
✔️ How to define custom DocTypes
✔️ How Frappe uses DocType metadata to build forms and database tables
✔️ How to install and use custom apps in a Frappe site

📚 Reference / Tutorial

This app was implemented with help from the official Frappe tutorial “Create a DocType” on the Frappe docs site.

🙌 Next Steps (Optional)

You can extend this app by:
✔️ Adding server-side logic in Python
✔️ Writing client scripts for form behavior
✔️ Creating Reports and API endpoints
✔️ Adding Tests

📞 Contact

If you’d like to discuss improvements or collaborate, feel free to message me! ❤️

from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/pricing')
def pricing():
    return render_template('pricing.html')

# Project detail routes
@app.route('/project-ai-chatbot')
def project_ai_chatbot():
    return render_template('project-ai-chatbot.html')

@app.route('/project-business-intelligence')
def project_business_intelligence():
    return render_template('project-business-intelligence.html')

@app.route('/project-crm-system')
def project_crm_system():
    return render_template('project-crm-system.html')

@app.route('/project-ecommerce-platform')
def project_ecommerce_platform():
    return render_template('project-ecommerce-platform.html')

@app.route('/project-e-learning-platform')
def project_e_learning_platform():
    return render_template('project-e-learning-platform.html')

@app.route('/project-fintech-dashboard')
def project_fintech_dashboard():
    return render_template('project-fintech-dashboard.html')

@app.route('/project-healthcare-portal')
def project_healthcare_portal():
    return render_template('project-healthcare-portal.html')

@app.route('/project-mobile-app-design')
def project_mobile_app_design():
    return render_template('project-mobile-app-design.html')

@app.route('/project-predictive-analytics')
def project_predictive_analytics():
    return render_template('project-predictive-analytics.html')

@app.route('/project-process-automation')
def project_process_automation():
    return render_template('project-process-automation.html')

@app.route('/project-restaurant-branding')
def project_restaurant_branding():
    return render_template('project-restaurant-branding.html')

@app.route('/project-tech-startup-brand')
def project_tech_startup_brand():
    return render_template('project-tech-startup-brand.html')

@app.route('/project-wellness-brand')
def project_wellness_brand():
    return render_template('project-wellness-brand.html')

# SEO routes
@app.route('/sitemap.xml')
def sitemap():
    return send_from_directory('static', 'sitemap.xml', mimetype='application/xml')

@app.route('/robots.txt')
def robots():
    return send_from_directory('static', 'robots.txt', mimetype='text/plain')

if __name__ == '__main__':
    app.run(debug=True, port=8000) 
# Use the official Nginx image
FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy all website files (html, css, js) in one go
COPY ./ /usr/share/nginx/html/

# Expose port 81
EXPOSE 81

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

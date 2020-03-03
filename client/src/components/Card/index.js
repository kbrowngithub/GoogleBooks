import React from "react";

function Card({ icon, title, children }) {
    return (
        <div class="card mt-4">
            <div class="card-header">
                {title}
            </div>
            <div class="card-body">
                {children}
            </div>
        </div>
  );
}

export default Card;
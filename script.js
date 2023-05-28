window.addEventListener("DOMContentLoaded", () => {
    addPanelListener();
    console.log(this);
});

const addPanelListener = () => {
    const panels = document.querySelectorAll('.panel-dimensions');
    panels.forEach(div => {
        div.addEventListener("click", () => {
            deactivatePanels(panels);
            showPanel(div);
        });
    })
}

const showPanel = panel => {
    panel.classList.add("active");
}

const deactivatePanels = panels => {
    panels.forEach(div => {
        div.classList.remove('active');
    })
}
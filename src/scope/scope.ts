// Scope

// Lost context
class ClickCounter {
  private count = 0;

  registerClick() {
    this.count++;
    alert(this.count);
  }
}

const clickCounter = new ClickCounter();

const targetId: HTMLElement | null = document.getElementById("target");
if (targetId) {
  // access properties of targetId
}

// Property and Arrow function

class ClickCounter1 {
  private count = 0;

  registerClick = () => {
    this.count++;
    alert(this.count);
  };
}

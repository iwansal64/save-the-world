export const sidebarLinks: Element[] = [];
Array.from(document.getElementById("sidebar-navigation")!.children || []).forEach((element) => {
      sidebarLinks.push(element);
});

export const sidebarMobileLinks: Element[] = [];
Array.from(document.getElementById("sidebar-navigation-mobile")!.children || []).forEach((element) => {
      sidebarMobileLinks.push(element);
});


export function setCurrentSectionIndex(currentSectionIndex: number) {
      console.log(currentSectionIndex);
      for (let i = 0; i <= currentSectionIndex; i++) {
            sidebarLinks[i]!.classList.toggle("active", true);
            sidebarMobileLinks[i]!.classList.toggle("active", true);
      }
      for (let i = currentSectionIndex + 1; i < sidebarLinks.length; i++) {
            sidebarLinks[i]!.classList.toggle("active", false);
            sidebarMobileLinks[i]!.classList.toggle("active", false);
      }
}
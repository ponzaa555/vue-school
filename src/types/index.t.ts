export {};
declare global {
    interface Window {
        user:string
    }   
}
window.user = window.user || null
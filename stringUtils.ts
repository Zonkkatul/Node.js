export function reverseString(str: string): string {
    return str.split('').reverse().join('');
  }
  
 
  export function countCharacters(str: string): number {
    return str.replace(/\s/g, '').length;
  }
  
  
  export function toTitleCase(str: string): string {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  
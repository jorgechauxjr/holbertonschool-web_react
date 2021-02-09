// task_1 Teacher Interface

interface Teacher {
  // readonly because first and last name
  // should only be modifiable when a Teacher is first initialized
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  //  ? at the end of the property means optional propperty
  yearsOfExperience?: number;
  [customAttribute: string]: any; 
}

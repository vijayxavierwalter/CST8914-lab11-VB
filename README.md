What is the keyboard function you can improve to increase usability?          
We can add below 4 optional keys to increase usability. Accordion will work perfectly fine without these 4 elements. But adding them will increase usability.  
Down Arrow (Optional): If focus is on an accordion header, moves focus to the next accordion header. If focus is on the last accordion header, either does nothing or moves focus to the first accordion header.  
Up Arrow (Optional): If focus is on an accordion header, moves focus to the previous accordion header. If focus is on the first accordion header, either does nothing or moves focus to the last accordion header.  
Home (Optional): When focus is on an accordion header, moves focus to the first accordion header.  
End (Optional): When focus is on an accordion header, moves focus to the last accordion header.     

What are the missing ARIA ?   
The missing ARIA attributes were aria-expanded, aria-controls, and aria-labelledby.   
Also, the decorative icon should have aria-hidden="true". These make the accordion state and relationships clear to screen readers.   

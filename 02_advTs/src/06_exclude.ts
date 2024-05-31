type Events = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Events, 'scroll'>; // 'click' | 'mousemove' is in ExcludeEventinstance

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

// similar to PICK but alternative
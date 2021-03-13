export default function QuoteGenerator(){

  const quotes =[{quote:'', auth:''},{quote:'Before software can be reusable it first has to be usable.', auth:'Ralph Johnson'},
  {quote:'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.', auth:'Gerald Weinberg'},
  {quote:'There are two ways to write error-free programs; only the third one works.',auth: 'Alan J. Perlis'},
  {quote:"It's not a bug – it’s an undocumented feature.",auth:'Anonymous'},
  {quote:"One man’s crappy software is another man’s full-time job.", auth:'Jessica Gaston'},
  {quote:'A good programmer is someone who always looks both ways before crossing a one-way street.', auth: 'Doug Linder'},
  {quote:'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', auth: 'Martin Golding'},
  {quote:'Walking on water and developing software from a specification are easy if both are frozen.', auth: 'Edward V Berard'},
  {quote:'If debugging is the process of removing software bugs, then programming must be the process of putting them in.', auth: 'Edsger Dijkstra'},
  {quote:"Software undergoes beta testing shortly before it's released. Beta is Latin for 'still doesn’t work.'", auth: 'Anonymous'},
  {quote:'It’s a curious thing about our industry: not only do we not learn from our mistakes, but we also don’t learn from our successes.', auth: 'Keith Braithwaite'},
  {quote:'There are only two kinds of programming languages: those people always bitch about and those nobody uses.', auth: 'Bjarne Stroustrup'},
  {quote:'In order to understand recursion, one must first understand recursion.' ,auth: 'Anonymous'},
  {quote:"The cheapest, fastest, and most reliable components are those that aren't there.", auth: 'Gordon Bell'},
  {quote:'The best performance improvement is the transition from the nonworking state to the working state.', auth: 'J. Osterhout'},
  {quote:'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.', auth: 'Seymour Cray'},
  {quote:'Things aren’t always #000000 and #FFFFFF', auth:'Anonymous'},
  {quote:"There are only two industries that refer to their customers as 'users'.", auth: 'Edward Tufte'},
  {quote:"If at first you don't succeed; call it version 1.0",auth:'Anonymous'},
  {quote:'If Internet Explorer is brave enough to ask to be your default browser, You are brave enough to ask that girl out.',auth:'Anonymous'},
  {quote:'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.', auth:'Mosher’s Law of Software Engineering'},
  {quote:"If you're already a front-end developer, well, pretend you're also wearing a pirate hat.",auth:"Ethan Marcotte"}]

  const min = 1;
  const max = 22;
  const rand = min + Math.random() * (max - min);
  let newRand = Math.round(rand);
  return quotes[newRand];
}

class Dashboard {
    constructor(){
        var pageOne = document.querySelector('#first');
        this.SwitchOne = new SwitchOne(pageOne);
        var pageTwo = document.querySelector('#second');
        this.SwitchTwo = new SwitchTwo(pageTwo);
        this.SwitchTwo.Hide();

        this.toSecond=this.toSecond.bind(this);
        this.toFirst=this.toFirst.bind(this);

        var goback = document.querySelector('#back');
        goback.addEventListener('click',this.toFirst);
    }
    toSecond()
    {
        this.SwitchOne.Hide();
        this.SwitchTwo.Show();
    }
    toFirst()
    {
        this.SwitchOne.Show();
        this.SwitchTwo.Hide();
    }
}
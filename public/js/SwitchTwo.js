class SwitchTwo {
    constructor(pageTwo)
    {
        this.Hide=this.Hide.bind(this);
        this.Show=this.Show.bind(this);
        this.pageTwo=pageTwo;
    }
    Hide()
    {
        this.pageTwo.classList.add('inactive');
    }
    Show()
    {
        this.pageTwo.classList.remove('inactive');
    }
}
class SwitchOne {
    constructor(pageOne)
    {
        this.Hide=this.Hide.bind(this);
        this.Show=this.Show.bind(this);
        this.pageOne=pageOne;
    }
    Hide()
    {
        this.pageOne.classList.add('inactive');
    }
    Show()
    {
        this.pageOne.classList.remove('inactive');
    }

}
import java.util.*;

public class CarMain
{
    public static void main (String [] args)
    {
        Scanner keyboard = new Scanner (System.in);
        double fuelEfficiency;
        double gallonsOfGas;
        double milesToDrive;
        double milesDriven;
        System.out.println ("What is the fuel efficiency of your car?");
        fuelEfficiency = keyboard.nextDouble();
        Car fiesta = new Car (fuelEfficiency);
        System.out.println ("How much gas do you want to add to your car?");
        gallonsOfGas = keyboard.nextDouble();
        fiesta.addGas(gallonsOfGas);
        System.out.println ("How many miles do you want to drive?");
        milesToDrive = keyboard.nextDouble();
        milesDriven = fiesta.drive(milesToDrive);
        System.out.println ("You drove " + milesDriven + " miles.");
        System.out.println ("You have " + fiesta.getGasLevel() + " gallons of gas left.");
    }
}
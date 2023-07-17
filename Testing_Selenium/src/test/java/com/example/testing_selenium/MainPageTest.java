package com.example.testing_selenium;
import com.codeborne.selenide.Configuration;
import com.codeborne.selenide.Selenide;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import com.codeborne.selenide.logevents.SelenideLogger;
import io.qameta.allure.selenide.AllureSelenide;
;
import static org.junit.jupiter.api.Assertions.*;

import static com.codeborne.selenide.Condition.attribute;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selenide.*;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.*;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

public class MainPageTest {

    ChromeDriver driver;
    @BeforeMethod
    public void startBrowser() throws InterruptedException {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get("http://localhost:3000/");
        Thread.sleep(500);
    }


    @Test
    public void test_navbar() throws InterruptedException {
        driver.findElement(new By.ByXPath("//a[@name=\"home_link5\"]")).click();
        Thread.sleep(500);

        driver.findElement(new By.ByXPath("//button[@name=\"UserPage_SideBar2\"]")).click();
        Thread.sleep(1000);
        //WebElement element = driver.findElement(By.id("Login"));
        driver.findElement(new By.ByXPath("//input[@name=\"UserPage_SideBar\"]")).isSelected();
        Thread.sleep(1000);
        Thread.sleep(5000);
    }

    @Test
    public void test_navbarX() throws InterruptedException {
        driver.findElement(new By.ByXPath("//a[@name=\"home_link5\"]")).click();
        Thread.sleep(2000);

        driver.findElement(new By.ByXPath("//button[@name=\"UserPage_SideBar2\"]")).click();

        Thread.sleep(500);
        //driver.findElement(new By.ByXPath("//input[@name=\"UserPage_SideBarXX\"]")).click();
        //Thread.sleep(5000);
    }


    @Test
    public void test_sign_up() throws InterruptedException {
        driver.findElement(new By.ByXPath("//a[@name=\"home_link1\"]")).click();
        Thread.sleep(1000);

        driver.findElement(new By.ByXPath("//input[@id=\"signup_firstName\"]")).sendKeys("Nemo");
        driver.findElement(new By.ByXPath("//input[@id=\"signup_lastName\"]")).sendKeys("Schoolboy");
        driver.findElement(new By.ByXPath("//input[@id=\"signup_username\"]")).sendKeys("Sharkbait");
        driver.findElement(new By.ByXPath("//input[@id=\"signup_phone\"]")).sendKeys("Dory_phone");
        driver.findElement(new By.ByXPath("//input[@id=\"signup_lpassword\"]")).sendKeys("Dad");
        driver.findElement(new By.ByXPath("//input[@id=\"signup_lpassword2\"]")).sendKeys("Dad");

        Thread.sleep(1000);
        driver.findElement(new By.ByXPath("//button[@name=\"signup_submit\"]")).click();

        Thread.sleep(5000);
    }

    @Test
    public void test_log_in() throws InterruptedException {
        driver.findElement(new By.ByXPath("//a[@name=\"home_link2\"]")).click();
        Thread.sleep(1000);

        driver.findElement(new By.ByXPath("//input[@id=\"Login_username\"]")).sendKeys("Nemo");
        driver.findElement(new By.ByXPath("//input[@id=\"Login_lpassword\"]")).sendKeys("Dad");

        Thread.sleep(1000);
        driver.findElement(new By.ByXPath("//button[@id=\"btnLogin\"]")).click();

        Thread.sleep(5000);
    }

    @Test
    public void test_like_button() throws InterruptedException {
        driver.findElement(new By.ByXPath("//a[@name=\"home_link8\"]")).click();
        Thread.sleep(1000);

        driver.findElement(new By.ByXPath("//input[@id=\"Login_username\"]")).sendKeys("Nemo");
        driver.findElement(new By.ByXPath("//input[@id=\"Login_lpassword\"]")).sendKeys("Dad");

        Thread.sleep(1000);
        driver.findElement(new By.ByXPath("//button[@id=\"btnLogin\"]")).click();

        Thread.sleep(5000);
    }



    @AfterMethod
    public void CloseBrowser()
    {
        driver.close();
    }
}
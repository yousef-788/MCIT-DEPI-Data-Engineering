create table Dim_Date
(
  Date_SK int primary key,
  Full_Date date not null,
  Year int,
  Quarter int ,
  Month_Number int,
  Month_Name nvarchar(50),
  Day_of_Week int,
  Day_Name nvarchar(50),
  Day_of_Month int,
  Week_of_Year int,
  Is_Weekend bit
)



-- Simple stored procedure to populate date dimension
CREATE PROCEDURE sp_PopulateDateDimension
    @StartDate DATE,
    @EndDate DATE
AS
BEGIN
    DECLARE @CurrentDate DATE = @StartDate;
    
    WHILE @CurrentDate <= @EndDate
    BEGIN
        INSERT INTO Dim_Date (
            Date_SK,
            Full_Date,
            Year,
            Quarter,
            Month_Number,
            Month_Name,
            Day_of_Week,
            Day_Name,
            Day_of_Month,
            Week_of_Year,
            Is_Weekend
        )
        VALUES (
            CONVERT(INT, FORMAT(@CurrentDate, 'yyyyMMdd')),
            @CurrentDate,
            YEAR(@CurrentDate),
            DATEPART(QUARTER, @CurrentDate),
            MONTH(@CurrentDate),
            DATENAME(MONTH, @CurrentDate),
            DATEPART(WEEKDAY, @CurrentDate),
            DATENAME(WEEKDAY, @CurrentDate),
            DAY(@CurrentDate),
            DATEPART(WEEK, @CurrentDate),
            CASE WHEN DATEPART(WEEKDAY, @CurrentDate) IN (1, 7) THEN 1 ELSE 0 END
        );
        
        SET @CurrentDate = DATEADD(DAY, 1, @CurrentDate);
    END
END;
GO


-- Populate dimensions
EXEC sp_PopulateDateDimension '2025-01-01', '2030-12-31';

-- Verify data
SELECT 'Dim_Date' AS TableName, COUNT(*) AS 'RowCount' FROM Dim_Date

CREATE TABLE [dbo].[Grades]
(
	[StudentID] INT NOT NULL PRIMARY KEY, 
    [ClassID] INT NOT NULL, 
    [GPA] INT NOT NULL DEFAULT 0, 
    CONSTRAINT [ClassFK] FOREIGN KEY ([ClassID]) REFERENCES [Courses]([CourseID]), 
)

# PersonaView - Database Schema Documentation

## Overview
This document outlines the database structure for the PersonaView personality assessment application. The schema is designed to support user management, test administration, result storage, and personalized insights.

---

## Database Model Architecture

### Entity Relationship Diagram (ERD) Description

```
Users (1) ──── (1) TestResults ──── (1) PersonalityTypes
  │                    │
  │                    │
  │                   (M)
  │                    │
  │              UserAnswers ──── (1) Questions
  │                    
  └──── (M) UserInsights
```

---

## Tables & Schema

### 1. **users**
Stores user profile and account information.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `user_id` | UUID | PRIMARY KEY | Unique identifier for each user |
| `email` | VARCHAR(255) | UNIQUE, NOT NULL | User's email address |
| `username` | VARCHAR(100) | UNIQUE | Display name |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Account creation date |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | Last profile update |
| `language_preference` | VARCHAR(10) | DEFAULT 'en' | User's preferred language (en, mn, zh) |
| `notifications_enabled` | BOOLEAN | DEFAULT true | Notification settings |
| `dark_mode` | BOOLEAN | DEFAULT false | Theme preference |

**Indexes:**
- PRIMARY KEY on `user_id`
- UNIQUE INDEX on `email`
- INDEX on `created_at`

---

### 2. **personality_types**
Contains the 16 MBTI personality type definitions.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `type_id` | VARCHAR(4) | PRIMARY KEY | MBTI code (e.g., 'INTP', 'ENFJ') |
| `name` | VARCHAR(50) | NOT NULL | Full name of type |
| `subtitle` | VARCHAR(100) | NOT NULL | Descriptive subtitle (e.g., 'The Architect') |
| `color_primary` | VARCHAR(7) | NOT NULL | Primary hex color |
| `color_secondary` | VARCHAR(7) | NOT NULL | Secondary hex color |
| `color_accent` | VARCHAR(7) | NOT NULL | Accent hex color |
| `background_pattern` | VARCHAR(50) | NOT NULL | Pattern type identifier |
| `character_image_url` | TEXT | | URL to background image |
| `at_work` | TEXT | NOT NULL | Work behavior description |
| `in_relationships` | TEXT | NOT NULL | Relationship behavior description |
| `under_stress` | TEXT | NOT NULL | Stress behavior description |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Record creation date |

**Indexes:**
- PRIMARY KEY on `type_id`

---

### 3. **personality_traits**
Stores key traits for each personality type (many-to-one with personality_types).

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `trait_id` | SERIAL | PRIMARY KEY | Unique trait identifier |
| `type_id` | VARCHAR(4) | FOREIGN KEY → personality_types(type_id) | Associated personality type |
| `trait_name` | VARCHAR(100) | NOT NULL | Trait name (e.g., 'Analytical') |
| `trait_category` | VARCHAR(20) | NOT NULL | Category: 'key', 'strength', 'growth' |
| `display_order` | INTEGER | NOT NULL | Order for display |

**Indexes:**
- PRIMARY KEY on `trait_id`
- FOREIGN KEY on `type_id` REFERENCES `personality_types(type_id)`
- INDEX on `(type_id, trait_category)`

---

### 4. **famous_figures**
Stores famous people associated with each personality type.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `figure_id` | SERIAL | PRIMARY KEY | Unique identifier |
| `type_id` | VARCHAR(4) | FOREIGN KEY → personality_types(type_id) | Associated personality type |
| `name` | VARCHAR(100) | NOT NULL | Famous person's name |
| `title` | VARCHAR(100) | NOT NULL | Their title/profession |
| `image_url` | TEXT | NOT NULL | Portrait image URL |
| `display_order` | INTEGER | NOT NULL | Order for display |

**Indexes:**
- PRIMARY KEY on `figure_id`
- FOREIGN KEY on `type_id` REFERENCES `personality_types(type_id)`
- INDEX on `type_id`

---

### 5. **questions**
Contains all personality test questions.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `question_id` | SERIAL | PRIMARY KEY | Unique question identifier |
| `question_text` | TEXT | NOT NULL | The question text |
| `dimension` | VARCHAR(2) | NOT NULL | MBTI dimension: 'EI', 'SN', 'TF', 'JP' |
| `direction` | INTEGER | NOT NULL | Scoring direction: 1 or -1 |
| `category` | VARCHAR(50) | NOT NULL | Question category |
| `display_order` | INTEGER | NOT NULL | Order in test (1-40) |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Question creation date |

**Indexes:**
- PRIMARY KEY on `question_id`
- INDEX on `dimension`
- INDEX on `display_order`

---

### 6. **test_results**
Stores completed test results for users.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `result_id` | UUID | PRIMARY KEY | Unique result identifier |
| `user_id` | UUID | FOREIGN KEY → users(user_id) | User who took the test |
| `type_id` | VARCHAR(4) | FOREIGN KEY → personality_types(type_id) | Calculated personality type |
| `e_score` | INTEGER | NOT NULL | Extraversion score |
| `i_score` | INTEGER | NOT NULL | Introversion score |
| `s_score` | INTEGER | NOT NULL | Sensing score |
| `n_score` | INTEGER | NOT NULL | Intuition score |
| `t_score` | INTEGER | NOT NULL | Thinking score |
| `f_score` | INTEGER | NOT NULL | Feeling score |
| `j_score` | INTEGER | NOT NULL | Judging score |
| `p_score` | INTEGER | NOT NULL | Perceiving score |
| `completed_at` | TIMESTAMP | DEFAULT NOW() | Test completion time |
| `time_taken_seconds` | INTEGER | | Time to complete test |
| `is_current` | BOOLEAN | DEFAULT true | Whether this is the user's current result |

**Indexes:**
- PRIMARY KEY on `result_id`
- FOREIGN KEY on `user_id` REFERENCES `users(user_id)` ON DELETE CASCADE
- FOREIGN KEY on `type_id` REFERENCES `personality_types(type_id)`
- INDEX on `(user_id, is_current)`
- INDEX on `completed_at`

---

### 7. **user_answers**
Stores individual answers to test questions.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `answer_id` | UUID | PRIMARY KEY | Unique answer identifier |
| `result_id` | UUID | FOREIGN KEY → test_results(result_id) | Associated test result |
| `question_id` | INTEGER | FOREIGN KEY → questions(question_id) | Question answered |
| `answer_value` | INTEGER | NOT NULL, CHECK (1-5) | Answer: 1-5 (Strongly Disagree to Strongly Agree) |
| `answered_at` | TIMESTAMP | DEFAULT NOW() | When the question was answered |

**Indexes:**
- PRIMARY KEY on `answer_id`
- FOREIGN KEY on `result_id` REFERENCES `test_results(result_id)` ON DELETE CASCADE
- FOREIGN KEY on `question_id` REFERENCES `questions(question_id)`
- INDEX on `result_id`
- UNIQUE INDEX on `(result_id, question_id)` (prevent duplicate answers)

---

### 8. **insights**
Stores personalized insights and tips for each personality type.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `insight_id` | SERIAL | PRIMARY KEY | Unique insight identifier |
| `type_id` | VARCHAR(4) | FOREIGN KEY → personality_types(type_id) | Target personality type |
| `category` | VARCHAR(50) | NOT NULL | Category: 'career', 'relationships', 'growth', 'communication' |
| `title` | VARCHAR(200) | NOT NULL | Insight title |
| `content` | TEXT | NOT NULL | Insight content/description |
| `icon_name` | VARCHAR(50) | | Icon identifier for UI |
| `display_order` | INTEGER | NOT NULL | Display order |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Creation date |

**Indexes:**
- PRIMARY KEY on `insight_id`
- FOREIGN KEY on `type_id` REFERENCES `personality_types(type_id)`
- INDEX on `(type_id, category)`

---

### 9. **user_insights**
Tracks which insights users have viewed (optional, for engagement tracking).

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `user_insight_id` | UUID | PRIMARY KEY | Unique identifier |
| `user_id` | UUID | FOREIGN KEY → users(user_id) | User who viewed insight |
| `insight_id` | INTEGER | FOREIGN KEY → insights(insight_id) | Insight viewed |
| `viewed_at` | TIMESTAMP | DEFAULT NOW() | When insight was viewed |
| `is_bookmarked` | BOOLEAN | DEFAULT false | User bookmarked this insight |

**Indexes:**
- PRIMARY KEY on `user_insight_id`
- FOREIGN KEY on `user_id` REFERENCES `users(user_id)` ON DELETE CASCADE
- FOREIGN KEY on `insight_id` REFERENCES `insights(insight_id)`
- UNIQUE INDEX on `(user_id, insight_id)`

---

## Relationships Summary

### One-to-One Relationships
- `users` (1) ↔ (1) `test_results` (current result)
  - A user has one current test result
  - A test result belongs to one user

### One-to-Many Relationships
- `personality_types` (1) → (M) `personality_traits`
  - One type has many traits
  
- `personality_types` (1) → (M) `famous_figures`
  - One type has many famous figures
  
- `personality_types` (1) → (M) `insights`
  - One type has many insights
  
- `users` (1) → (M) `test_results` (historical)
  - One user can take the test multiple times
  
- `test_results` (1) → (M) `user_answers`
  - One test result has 40 answers
  
- `questions` (1) → (M) `user_answers`
  - One question can be answered by many users

### Many-to-Many Relationships
- `users` (M) ↔ (M) `insights` (through `user_insights`)
  - Users can view/bookmark many insights
  - Insights can be viewed by many users

---

## Data Flow

### 1. User Registration
```
User signs up → Create record in `users` table
```

### 2. Taking the Test
```
User starts test → Loads 40 questions from `questions` table
User answers questions → Temporarily stored in session/memory
User completes test → Calculate scores
```

### 3. Storing Results
```
Calculate MBTI type → Create `test_results` record
Store all 40 answers → Create 40 `user_answers` records
Mark previous results as not current → Update old `test_results` where user_id matches
```

### 4. Viewing Results
```
Load result → JOIN test_results with personality_types
Load details → JOIN with personality_traits, famous_figures
Load insights → Query insights table filtered by type_id
```

### 5. Exploring Types
```
User browses → Query all from `personality_types`
Select type → Load full details with JOINs
```

---

## Sample Queries

### Get User's Current Personality Type
```sql
SELECT 
  u.username,
  pt.type_id,
  pt.name,
  pt.subtitle,
  tr.completed_at
FROM users u
JOIN test_results tr ON u.user_id = tr.user_id
JOIN personality_types pt ON tr.type_id = pt.type_id
WHERE u.user_id = ? AND tr.is_current = true;
```

### Get All Traits for a Personality Type
```sql
SELECT 
  trait_name,
  trait_category
FROM personality_traits
WHERE type_id = 'INTP'
ORDER BY trait_category, display_order;
```

### Get User's Test History
```sql
SELECT 
  tr.result_id,
  pt.name,
  tr.completed_at,
  tr.is_current
FROM test_results tr
JOIN personality_types pt ON tr.type_id = pt.type_id
WHERE tr.user_id = ?
ORDER BY tr.completed_at DESC;
```

### Get User's Answers for a Test Result
```sql
SELECT 
  q.question_text,
  ua.answer_value,
  q.dimension
FROM user_answers ua
JOIN questions q ON ua.question_id = q.question_id
WHERE ua.result_id = ?
ORDER BY q.display_order;
```

### Get Insights for User's Personality Type
```sql
SELECT 
  i.title,
  i.content,
  i.category,
  i.icon_name
FROM insights i
JOIN test_results tr ON i.type_id = tr.type_id
WHERE tr.user_id = ? AND tr.is_current = true
ORDER BY i.category, i.display_order;
```

---

## Storage Considerations

### Current Implementation
- **Local Storage (Browser)**: Currently stores user results in browser's localStorage
- **Pros**: No server needed, instant access, privacy-friendly
- **Cons**: Data lost if browser cleared, no cross-device sync, no analytics

### Future Database Implementation
- **PostgreSQL** (Recommended): Robust, supports complex queries, JSON fields for flexibility
- **MongoDB**: Good for document-based storage, flexible schema
- **Supabase**: PostgreSQL with built-in auth and real-time features

---

## Data Privacy & Security

### GDPR Compliance
- User data deletion: CASCADE DELETE on user_id
- Data export: Query all user-related tables
- Anonymization: Remove PII while keeping aggregate statistics

### Security Measures
- Passwords: Hashed using bcrypt (not stored in schema above - handled by auth service)
- API Keys: Environment variables, never in database
- Row-Level Security (RLS): Users can only access their own data
- Encryption at rest: Database-level encryption
- HTTPS only: All API communications encrypted

---

## Scalability Considerations

### Indexing Strategy
- Primary keys on all tables
- Foreign keys for referential integrity
- Composite indexes for common query patterns
- Consider partitioning `test_results` by date for high volume

### Caching Strategy
- Cache `personality_types` data (rarely changes)
- Cache `questions` (static content)
- Cache user's current result
- Invalidate cache on new test completion

### Performance Optimization
- Use connection pooling
- Implement pagination for test history
- Denormalize frequently accessed data if needed
- Consider read replicas for heavy traffic

---

## Migration from Local Storage to Database

### Step 1: Export Local Data
```javascript
const localData = localStorage.getItem('personalityTestResult');
const userData = JSON.parse(localData);
```

### Step 2: Transform & Import
```javascript
// Transform to database format
const testResult = {
  user_id: currentUserId,
  type_id: userData.type,
  e_score: userData.scores.E,
  i_score: userData.scores.I,
  // ... etc
};

// Insert into database
await db.insert('test_results', testResult);
```

### Step 3: Sync Strategy
- Detect local storage data on first login
- Prompt user to import/migrate
- Keep local storage as backup during transition
- Clear after successful migration

---

## Database Backup Strategy

### Recommended Approach
1. **Daily automated backups** of entire database
2. **Point-in-time recovery** enabled
3. **Geographic replication** for disaster recovery
4. **Test restoration** quarterly
5. **Retention policy**: 30 days rolling, monthly snapshots for 1 year

---

## Conclusion

This schema provides a robust foundation for the PersonaView application with:
- ✅ Normalized data structure
- ✅ Referential integrity
- ✅ Scalability for growth
- ✅ Privacy and security considerations
- ✅ Efficient querying patterns
- ✅ Historical test tracking
- ✅ Flexible insight system

The schema can be implemented in any relational database (PostgreSQL, MySQL, SQLite) or adapted for NoSQL databases (MongoDB, DynamoDB) based on specific requirements.

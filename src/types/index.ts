// types/index.ts

// ===== ПОЛЬЗОВАТЕЛИ =====
export type UserRole = 'student' | 'parent' | 'admin'

export interface Profile {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  role: UserRole
  created_at: string
  updated_at: string
}

// ===== КУРСЫ =====
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced'
export type LessonType = 'video' | 'quiz' | 'assignment'

export interface Course {
  id: string
  slug: string
  title: string
  description: string
  level: CourseLevel
  cover_image?: string
  price: number // в копейках/центах
  is_published: boolean
  order: number
  created_at: string
  updated_at: string
}

export interface Module {
  id: string
  course_id: string
  title: string
  description?: string
  order: number
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  module_id: string
  title: string
  description?: string
  type: LessonType
  content: {
    video_url?: string
    duration?: number // в секундах
    text?: string
    quiz_id?: string
    assignment?: {
      description: string
      files?: string[]
    }
  }
  order: number
  is_free: boolean // для пробного урока
  created_at: string
}

// ===== ПРОГРЕСС =====
export interface LessonProgress {
  user_id: string
  lesson_id: string
  completed: boolean
  watched_seconds?: number // до какой секунды досмотрел
  completed_at?: string
  updated_at: string
}

export interface CourseProgress {
  user_id: string
  course_id: string
  started_at: string
  completed_at?: string
  last_lesson_id?: string
  progress_percent: number // 0-100
}

// ===== ДОСТИЖЕНИЯ =====
export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  condition: {
    type: 'course_completed' | 'lessons_count' | 'streak_days'
    value: number
  }
}

export interface UserAchievement {
  user_id: string
  achievement_id: string
  earned_at: string
}

// ===== ПЛАТЕЖИ =====
export type PaymentStatus = 'pending' | 'succeeded' | 'failed' | 'refunded'

export interface Payment {
  id: string
  user_id: string
  amount: number
  currency: string
  status: PaymentStatus
  payment_method?: string
  course_id?: string
  subscription_id?: string
  created_at: string
}
CREATE TABLE performance_review_templates (
  template_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org_id UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  sections_config JSONB,
  is_active BOOLEAN DEFAULT TRUE,
  created_by UUID REFERENCES users(user_id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE performance_review_cycles (
  cycle_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org_id UUID NOT NULL REFERENCES organizations(org_id) ON DELETE CASCADE,
  template_id UUID NOT NULL REFERENCES performance_review_templates(template_id),
  name VARCHAR(255) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  status VARCHAR(50) DEFAULT 'Upcoming',
  created_by UUID REFERENCES users(user_id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE performance_reviews (
  review_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  cycle_id UUID NOT NULL REFERENCES performance_review_cycles(cycle_id) ON DELETE CASCADE,
  reviewee_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'Pending',
  overall_rating NUMERIC(3,1),
  ai_summary TEXT,
  ai_rating_suggestion NUMERIC(3,1),
  final_comments TEXT,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE review_participants (
  review_participant_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  review_id UUID NOT NULL REFERENCES performance_reviews(review_id) ON DELETE CASCADE,
  reviewer_id UUID NOT NULL REFERENCES users(user_id),
  reviewer_type VARCHAR(50) NOT NULL,
  status VARCHAR(50) DEFAULT 'Pending',
  submitted_at TIMESTAMPTZ,
  feedback_data JSONB,
  PRIMARY KEY (review_id, reviewer_id, reviewer_type)
);
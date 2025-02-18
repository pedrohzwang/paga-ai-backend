package com.zwg.paga_ai.infrastructure.database.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "expense_occurrence")
public class ExpenseOccurrence {

    @Id
    private UUID id;

    @Column(name = "expense_id", nullable = false)
    @OneToOne(orphanRemoval = true, fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private ExpenseEntity expense;

    @Column(name = "due_date", nullable = false, columnDefinition = "DATE")
    private LocalDate dueDate;

    @Column(name = "renewal_date", nullable = false, columnDefinition = "DATE")
    private LocalDate renewalDate;
}

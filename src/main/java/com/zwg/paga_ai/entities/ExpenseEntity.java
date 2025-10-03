package com.zwg.paga_ai.entities;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
@Entity
@Table(name = "expense")
public class ExpenseEntity {


    @Id
    private UUID id;

    @Column(name = "description", nullable = false, columnDefinition = "VARCHAR(255)")
    private String description;

    @Column(name = "value", nullable = false, columnDefinition = "DECIMAL(10,2)")
    private Double value;

    @Column(name = "due_day", nullable = false, columnDefinition = "SMALLINT")
    private Byte dueDay;

    @Column(name = "is_recurring", nullable = false, columnDefinition = "BOOLEAN")
    private boolean isRecurring = false;

    @OneToMany(mappedBy = "expense", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<ExpenseOccurrenceEntity> occurrences = new ArrayList<>();
}

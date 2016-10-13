import React from 'react';
import { connect } from 'react-redux';
import { form } from 'reducers';
import { submitForm, clearForm } from 'actions';
import Form from './Form';
import FormField from './FormField';
import FormGroup from './FormGroup';
import SubmitButton from './SubmitButton';
import ClearButton from './ClearButton';
import ShowFormToggle from './ShowFormToggle';
import styles from './TableFilterForm.css';
import * as data from './TableFilter.config';

const FORM_NAME = 'tableFilter';

// TODO localize strings
const TableFilterForm = ({ submitForm, clearForm, page, showForm }) => (
  <div>
    <ShowFormToggle page={page} formName={FORM_NAME} />
    <div className={showForm ? styles.showForm : styles.hideForm}>
      <Form name={FORM_NAME} className={styles.form}>
        <FormGroup className={styles.formGroup}>
          <FormField
            name="with_hero_id"
            label="With Heroes"
            dataSource={data.heroList}
            dataSourceConfig={data.heroConfig}
            strict
            limit={5}
          />
          <FormField
            name="against_hero_id"
            label="Against Heroes"
            dataSource={data.heroList}
            dataSourceConfig={data.heroConfig}
            strict
            limit={5}
          />
          <FormField
            name="included_account_id"
            label="Included Players"
            limit={10}
          />
          <FormField
            name="excluded_account_id"
            label="Excluded Players"
          />
        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <FormField
            name="hero_id"
            label="Hero"
            dataSource={data.heroList}
            dataSourceConfig={data.heroConfig}
            strict
            limit={1}
          />
          <FormField
            name="is_radiant"
            label="Team"
            dataSource={data.factionList}
            dataSourceConfig={data.genericConfig}
            strict
            limit={1}
          />
          <FormField
            name="win"
            label="result"
            dataSource={data.resultList}
            dataSourceConfig={data.genericConfig}
            strict
            limit={1}
          />
          <FormField
            name="lane_role"
            label="lane"
            dataSource={data.laneList}
            dataSourceConfig={data.genericConfig}
            strict
            limit={1}
          />
        </FormGroup>
        <FormGroup className={styles.formGroup}>
          <FormField
            name="patch"
            label="patch"
            dataSource={data.patchList}
            dataSourceConfig={data.genericConfig}
            strict
            limit={1}
          />
          <FormField
            name="game_mode"
            label="game mode"
            dataSource={data.modeList}
            dataSourceConfig={data.genericConfig}
            strict
            limit={1}
          />
          <FormField
            name="lobby_type"
            label="lobby type"
            dataSource={data.lobbyTypeList}
            dataSourceConfig={data.genericConfig}
            strict
            limit={1}
          />
          <FormField
            name="date"
            label="date"
            dataSource={data.dateList}
            dataSourceConfig={data.genericConfig}
            strict
            limit={1}
          />
          <FormField
            name="region"
            label="region"
            dataSource={data.regionList}
            dataSourceConfig={data.genericConfig}
            strict
            limit={1}
          />
        </FormGroup>
        {/*
        <FormGroup className={styles.formGroup}>
          <FormField
            name="limit"
            label="number of matches"
            limit={1}
          />
        </FormGroup>
        */}
      </Form>
      <div className={styles.buttonContainer}>
        <ClearButton label="reset the thing" clearForm={clearForm} style={{ marginRight: 10 }} />
        <SubmitButton label="do the thing" submitForm={submitForm} />
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  submitForm: () => dispatch(submitForm(ownProps.submitAction.bind(null, ownProps.id), 'tableFilter')),
  clearForm: () => dispatch(clearForm('tableFilter')),
});

const mapStateToProps = (state, ownProps) => ({
  showForm: form.getFormPageShow(state, 'tableFilter', ownProps.page),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableFilterForm);

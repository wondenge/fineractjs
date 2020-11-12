

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdTimeline model module.
 * @module model/GetLoansLoanIdTimeline
 * @version 1.0
 */
class GetLoansLoanIdTimeline {
    /**
     * Constructs a new <code>GetLoansLoanIdTimeline</code>.
     * @alias module:model/GetLoansLoanIdTimeline
     */
    constructor() { 
        
        GetLoansLoanIdTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdTimeline} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdTimeline} The populated <code>GetLoansLoanIdTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdTimeline();

            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'Date');
            }
            if (data.hasOwnProperty('submittedByUsername')) {
                obj['submittedByUsername'] = ApiClient.convertToType(data['submittedByUsername'], 'String');
            }
            if (data.hasOwnProperty('submittedByFirstname')) {
                obj['submittedByFirstname'] = ApiClient.convertToType(data['submittedByFirstname'], 'String');
            }
            if (data.hasOwnProperty('submittedByLastname')) {
                obj['submittedByLastname'] = ApiClient.convertToType(data['submittedByLastname'], 'String');
            }
            if (data.hasOwnProperty('approvedOnDate')) {
                obj['approvedOnDate'] = ApiClient.convertToType(data['approvedOnDate'], 'Date');
            }
            if (data.hasOwnProperty('approvedByUsername')) {
                obj['approvedByUsername'] = ApiClient.convertToType(data['approvedByUsername'], 'String');
            }
            if (data.hasOwnProperty('approvedByFirstname')) {
                obj['approvedByFirstname'] = ApiClient.convertToType(data['approvedByFirstname'], 'String');
            }
            if (data.hasOwnProperty('approvedByLastname')) {
                obj['approvedByLastname'] = ApiClient.convertToType(data['approvedByLastname'], 'String');
            }
            if (data.hasOwnProperty('expectedDisbursementDate')) {
                obj['expectedDisbursementDate'] = ApiClient.convertToType(data['expectedDisbursementDate'], 'Date');
            }
            if (data.hasOwnProperty('actualDisbursementDate')) {
                obj['actualDisbursementDate'] = ApiClient.convertToType(data['actualDisbursementDate'], 'Date');
            }
            if (data.hasOwnProperty('disbursedByUsername')) {
                obj['disbursedByUsername'] = ApiClient.convertToType(data['disbursedByUsername'], 'String');
            }
            if (data.hasOwnProperty('disbursedByFirstname')) {
                obj['disbursedByFirstname'] = ApiClient.convertToType(data['disbursedByFirstname'], 'String');
            }
            if (data.hasOwnProperty('disbursedByLastname')) {
                obj['disbursedByLastname'] = ApiClient.convertToType(data['disbursedByLastname'], 'String');
            }
            if (data.hasOwnProperty('expectedMaturityDate')) {
                obj['expectedMaturityDate'] = ApiClient.convertToType(data['expectedMaturityDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} submittedOnDate
 */
GetLoansLoanIdTimeline.prototype['submittedOnDate'] = undefined;

/**
 * @member {String} submittedByUsername
 */
GetLoansLoanIdTimeline.prototype['submittedByUsername'] = undefined;

/**
 * @member {String} submittedByFirstname
 */
GetLoansLoanIdTimeline.prototype['submittedByFirstname'] = undefined;

/**
 * @member {String} submittedByLastname
 */
GetLoansLoanIdTimeline.prototype['submittedByLastname'] = undefined;

/**
 * @member {Date} approvedOnDate
 */
GetLoansLoanIdTimeline.prototype['approvedOnDate'] = undefined;

/**
 * @member {String} approvedByUsername
 */
GetLoansLoanIdTimeline.prototype['approvedByUsername'] = undefined;

/**
 * @member {String} approvedByFirstname
 */
GetLoansLoanIdTimeline.prototype['approvedByFirstname'] = undefined;

/**
 * @member {String} approvedByLastname
 */
GetLoansLoanIdTimeline.prototype['approvedByLastname'] = undefined;

/**
 * @member {Date} expectedDisbursementDate
 */
GetLoansLoanIdTimeline.prototype['expectedDisbursementDate'] = undefined;

/**
 * @member {Date} actualDisbursementDate
 */
GetLoansLoanIdTimeline.prototype['actualDisbursementDate'] = undefined;

/**
 * @member {String} disbursedByUsername
 */
GetLoansLoanIdTimeline.prototype['disbursedByUsername'] = undefined;

/**
 * @member {String} disbursedByFirstname
 */
GetLoansLoanIdTimeline.prototype['disbursedByFirstname'] = undefined;

/**
 * @member {String} disbursedByLastname
 */
GetLoansLoanIdTimeline.prototype['disbursedByLastname'] = undefined;

/**
 * @member {Date} expectedMaturityDate
 */
GetLoansLoanIdTimeline.prototype['expectedMaturityDate'] = undefined;






export default GetLoansLoanIdTimeline;


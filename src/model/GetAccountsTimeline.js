

import ApiClient from '../ApiClient';

/**
 * The GetAccountsTimeline model module.
 * @module model/GetAccountsTimeline
 * @version 1.0
 */
class GetAccountsTimeline {
    /**
     * Constructs a new <code>GetAccountsTimeline</code>.
     * @alias module:model/GetAccountsTimeline
     */
    constructor() { 
        
        GetAccountsTimeline.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetAccountsTimeline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAccountsTimeline} obj Optional instance to populate.
     * @return {module:model/GetAccountsTimeline} The populated <code>GetAccountsTimeline</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAccountsTimeline();

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
            if (data.hasOwnProperty('approvedDate')) {
                obj['approvedDate'] = ApiClient.convertToType(data['approvedDate'], 'Date');
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
            if (data.hasOwnProperty('activatedDate')) {
                obj['activatedDate'] = ApiClient.convertToType(data['activatedDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} submittedOnDate
 */
GetAccountsTimeline.prototype['submittedOnDate'] = undefined;

/**
 * @member {String} submittedByUsername
 */
GetAccountsTimeline.prototype['submittedByUsername'] = undefined;

/**
 * @member {String} submittedByFirstname
 */
GetAccountsTimeline.prototype['submittedByFirstname'] = undefined;

/**
 * @member {String} submittedByLastname
 */
GetAccountsTimeline.prototype['submittedByLastname'] = undefined;

/**
 * @member {Date} approvedDate
 */
GetAccountsTimeline.prototype['approvedDate'] = undefined;

/**
 * @member {String} approvedByUsername
 */
GetAccountsTimeline.prototype['approvedByUsername'] = undefined;

/**
 * @member {String} approvedByFirstname
 */
GetAccountsTimeline.prototype['approvedByFirstname'] = undefined;

/**
 * @member {String} approvedByLastname
 */
GetAccountsTimeline.prototype['approvedByLastname'] = undefined;

/**
 * @member {Date} activatedDate
 */
GetAccountsTimeline.prototype['activatedDate'] = undefined;






export default GetAccountsTimeline;




import ApiClient from '../ApiClient';

/**
 * The StaffData model module.
 * @module model/StaffData
 * @version 1.0
 */
class StaffData {
    /**
     * Constructs a new <code>StaffData</code>.
     * @alias module:model/StaffData
     */
    constructor() { 
        
        StaffData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StaffData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StaffData} obj Optional instance to populate.
     * @return {module:model/StaffData} The populated <code>StaffData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StaffData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('joiningDate')) {
                obj['joiningDate'] = ApiClient.convertToType(data['joiningDate'], 'Date');
            }
            if (data.hasOwnProperty('rowIndex')) {
                obj['rowIndex'] = ApiClient.convertToType(data['rowIndex'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
StaffData.prototype['id'] = undefined;

/**
 * @member {String} firstname
 */
StaffData.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
StaffData.prototype['lastname'] = undefined;

/**
 * @member {String} displayName
 */
StaffData.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
StaffData.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
StaffData.prototype['officeName'] = undefined;

/**
 * @member {Date} joiningDate
 */
StaffData.prototype['joiningDate'] = undefined;

/**
 * @member {Number} rowIndex
 */
StaffData.prototype['rowIndex'] = undefined;






export default StaffData;


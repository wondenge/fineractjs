

import ApiClient from '../ApiClient';

/**
 * The GetClientsStaffOptions model module.
 * @module model/GetClientsStaffOptions
 * @version 1.0
 */
class GetClientsStaffOptions {
    /**
     * Constructs a new <code>GetClientsStaffOptions</code>.
     * @alias module:model/GetClientsStaffOptions
     */
    constructor() { 
        
        GetClientsStaffOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsStaffOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsStaffOptions} obj Optional instance to populate.
     * @return {module:model/GetClientsStaffOptions} The populated <code>GetClientsStaffOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsStaffOptions();

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
            if (data.hasOwnProperty('isLoanOfficer')) {
                obj['isLoanOfficer'] = ApiClient.convertToType(data['isLoanOfficer'], 'Boolean');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetClientsStaffOptions.prototype['id'] = undefined;

/**
 * @member {String} firstname
 */
GetClientsStaffOptions.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
GetClientsStaffOptions.prototype['lastname'] = undefined;

/**
 * @member {String} displayName
 */
GetClientsStaffOptions.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetClientsStaffOptions.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetClientsStaffOptions.prototype['officeName'] = undefined;

/**
 * @member {Boolean} isLoanOfficer
 */
GetClientsStaffOptions.prototype['isLoanOfficer'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetClientsStaffOptions.prototype['isActive'] = undefined;






export default GetClientsStaffOptions;


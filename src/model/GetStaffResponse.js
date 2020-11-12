

import ApiClient from '../ApiClient';

/**
 * The GetStaffResponse model module.
 * @module model/GetStaffResponse
 * @version 1.0
 */
class GetStaffResponse {
    /**
     * Constructs a new <code>GetStaffResponse</code>.
     * GetStaffResponse
     * @alias module:model/GetStaffResponse
     */
    constructor() { 
        
        GetStaffResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetStaffResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetStaffResponse} obj Optional instance to populate.
     * @return {module:model/GetStaffResponse} The populated <code>GetStaffResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetStaffResponse();

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
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('joiningDate')) {
                obj['joiningDate'] = ApiClient.convertToType(data['joiningDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetStaffResponse.prototype['id'] = undefined;

/**
 * @member {String} firstname
 */
GetStaffResponse.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
GetStaffResponse.prototype['lastname'] = undefined;

/**
 * @member {String} displayName
 */
GetStaffResponse.prototype['displayName'] = undefined;

/**
 * @member {Number} officeId
 */
GetStaffResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetStaffResponse.prototype['officeName'] = undefined;

/**
 * @member {Boolean} isLoanOfficer
 */
GetStaffResponse.prototype['isLoanOfficer'] = undefined;

/**
 * @member {String} externalId
 */
GetStaffResponse.prototype['externalId'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetStaffResponse.prototype['isActive'] = undefined;

/**
 * @member {Date} joiningDate
 */
GetStaffResponse.prototype['joiningDate'] = undefined;






export default GetStaffResponse;


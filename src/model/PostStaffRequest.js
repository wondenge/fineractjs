

import ApiClient from '../ApiClient';

/**
 * The PostStaffRequest model module.
 * @module model/PostStaffRequest
 * @version 1.0
 */
class PostStaffRequest {
    /**
     * Constructs a new <code>PostStaffRequest</code>.
     * PostStaffRequest
     * @alias module:model/PostStaffRequest
     */
    constructor() { 
        
        PostStaffRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostStaffRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostStaffRequest} obj Optional instance to populate.
     * @return {module:model/PostStaffRequest} The populated <code>PostStaffRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostStaffRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('isLoanOfficer')) {
                obj['isLoanOfficer'] = ApiClient.convertToType(data['isLoanOfficer'], 'Boolean');
            }
            if (data.hasOwnProperty('externalId')) {
                obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
            }
            if (data.hasOwnProperty('mobileNo')) {
                obj['mobileNo'] = ApiClient.convertToType(data['mobileNo'], 'String');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('joiningDate')) {
                obj['joiningDate'] = ApiClient.convertToType(data['joiningDate'], 'Date');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
PostStaffRequest.prototype['id'] = undefined;

/**
 * @member {String} firstname
 */
PostStaffRequest.prototype['firstname'] = undefined;

/**
 * @member {String} lastname
 */
PostStaffRequest.prototype['lastname'] = undefined;

/**
 * @member {Boolean} isLoanOfficer
 */
PostStaffRequest.prototype['isLoanOfficer'] = undefined;

/**
 * @member {String} externalId
 */
PostStaffRequest.prototype['externalId'] = undefined;

/**
 * @member {String} mobileNo
 */
PostStaffRequest.prototype['mobileNo'] = undefined;

/**
 * @member {Boolean} isActive
 */
PostStaffRequest.prototype['isActive'] = undefined;

/**
 * @member {Date} joiningDate
 */
PostStaffRequest.prototype['joiningDate'] = undefined;

/**
 * @member {String} locale
 */
PostStaffRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostStaffRequest.prototype['dateFormat'] = undefined;






export default PostStaffRequest;


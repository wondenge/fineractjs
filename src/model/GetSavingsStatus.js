

import ApiClient from '../ApiClient';

/**
 * The GetSavingsStatus model module.
 * @module model/GetSavingsStatus
 * @version 1.0
 */
class GetSavingsStatus {
    /**
     * Constructs a new <code>GetSavingsStatus</code>.
     * @alias module:model/GetSavingsStatus
     */
    constructor() { 
        
        GetSavingsStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsStatus} obj Optional instance to populate.
     * @return {module:model/GetSavingsStatus} The populated <code>GetSavingsStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsStatus();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('submittedAndPendingApproval')) {
                obj['submittedAndPendingApproval'] = ApiClient.convertToType(data['submittedAndPendingApproval'], 'Boolean');
            }
            if (data.hasOwnProperty('approved')) {
                obj['approved'] = ApiClient.convertToType(data['approved'], 'Boolean');
            }
            if (data.hasOwnProperty('rejected')) {
                obj['rejected'] = ApiClient.convertToType(data['rejected'], 'Boolean');
            }
            if (data.hasOwnProperty('withdrawnByApplicant')) {
                obj['withdrawnByApplicant'] = ApiClient.convertToType(data['withdrawnByApplicant'], 'Boolean');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsStatus.prototype['description'] = undefined;

/**
 * @member {Boolean} submittedAndPendingApproval
 */
GetSavingsStatus.prototype['submittedAndPendingApproval'] = undefined;

/**
 * @member {Boolean} approved
 */
GetSavingsStatus.prototype['approved'] = undefined;

/**
 * @member {Boolean} rejected
 */
GetSavingsStatus.prototype['rejected'] = undefined;

/**
 * @member {Boolean} withdrawnByApplicant
 */
GetSavingsStatus.prototype['withdrawnByApplicant'] = undefined;

/**
 * @member {Boolean} active
 */
GetSavingsStatus.prototype['active'] = undefined;

/**
 * @member {Boolean} closed
 */
GetSavingsStatus.prototype['closed'] = undefined;






export default GetSavingsStatus;


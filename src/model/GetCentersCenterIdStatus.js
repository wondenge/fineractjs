

import ApiClient from '../ApiClient';

/**
 * The GetCentersCenterIdStatus model module.
 * @module model/GetCentersCenterIdStatus
 * @version 1.0
 */
class GetCentersCenterIdStatus {
    /**
     * Constructs a new <code>GetCentersCenterIdStatus</code>.
     * @alias module:model/GetCentersCenterIdStatus
     */
    constructor() { 
        
        GetCentersCenterIdStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersCenterIdStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersCenterIdStatus} obj Optional instance to populate.
     * @return {module:model/GetCentersCenterIdStatus} The populated <code>GetCentersCenterIdStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersCenterIdStatus();

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
            if (data.hasOwnProperty('prematureClosed')) {
                obj['prematureClosed'] = ApiClient.convertToType(data['prematureClosed'], 'Boolean');
            }
            if (data.hasOwnProperty('transferInProgress')) {
                obj['transferInProgress'] = ApiClient.convertToType(data['transferInProgress'], 'Boolean');
            }
            if (data.hasOwnProperty('transferOnHold')) {
                obj['transferOnHold'] = ApiClient.convertToType(data['transferOnHold'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetCentersCenterIdStatus.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetCentersCenterIdStatus.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetCentersCenterIdStatus.prototype['description'] = undefined;

/**
 * @member {Boolean} submittedAndPendingApproval
 */
GetCentersCenterIdStatus.prototype['submittedAndPendingApproval'] = undefined;

/**
 * @member {Boolean} approved
 */
GetCentersCenterIdStatus.prototype['approved'] = undefined;

/**
 * @member {Boolean} rejected
 */
GetCentersCenterIdStatus.prototype['rejected'] = undefined;

/**
 * @member {Boolean} withdrawnByApplicant
 */
GetCentersCenterIdStatus.prototype['withdrawnByApplicant'] = undefined;

/**
 * @member {Boolean} active
 */
GetCentersCenterIdStatus.prototype['active'] = undefined;

/**
 * @member {Boolean} closed
 */
GetCentersCenterIdStatus.prototype['closed'] = undefined;

/**
 * @member {Boolean} prematureClosed
 */
GetCentersCenterIdStatus.prototype['prematureClosed'] = undefined;

/**
 * @member {Boolean} transferInProgress
 */
GetCentersCenterIdStatus.prototype['transferInProgress'] = undefined;

/**
 * @member {Boolean} transferOnHold
 */
GetCentersCenterIdStatus.prototype['transferOnHold'] = undefined;






export default GetCentersCenterIdStatus;

